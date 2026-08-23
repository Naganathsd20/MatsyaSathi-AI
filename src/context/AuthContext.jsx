import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // 1. Registered Users List (stored in localStorage under 'matsya_users')
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    try {
      const saved = localStorage.getItem('matsya_users') || localStorage.getItem('matsya_registered_users');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load registered users from localStorage', e);
      return [];
    }
  });

  // 2. Currently Authenticated User Session (resolved from localStorage ID)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const currentId = localStorage.getItem('matsya_current_user');
      if (!currentId) return null;

      // Guest session handling
      if (currentId.startsWith('guest_')) {
        const savedGuest = sessionStorage.getItem('matsya_guest_session');
        if (savedGuest) return JSON.parse(savedGuest);
        return {
          id: currentId,
          fullName: 'Guest Fisher',
          mobile: 'N/A',
          email: 'guest@matsyasathi.in',
          coastalRegion: 'Karnataka Coast',
          primaryHarbor: 'Mangaluru Old Port',
          vesselName: 'Guest Vessel',
          registrationNo: 'Guest Session',
          vesselType: 'Small Motorized Boat',
          engineHp: '15 HP Outboard',
          fuelCapacityL: 30,
          crewCapacity: 3,
          isGuest: true
        };
      }

      // Registered user handling from matsya_users
      const savedUsersRaw = localStorage.getItem('matsya_users') || localStorage.getItem('matsya_registered_users');
      const usersList = savedUsersRaw ? JSON.parse(savedUsersRaw) : [];
      const foundUser = usersList.find((u) => u.id === currentId);

      return foundUser || null;
    } catch (e) {
      console.error('Failed to resolve current user session', e);
      return null;
    }
  });

  // Sync registeredUsers to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('matsya_users', JSON.stringify(registeredUsers));
    } catch (e) {
      console.error('Failed to save registered users to localStorage', e);
    }
  }, [registeredUsers]);

  // Sync currentUser session ID to localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('matsya_current_user', currentUser.id);
        if (currentUser.isGuest) {
          sessionStorage.setItem('matsya_guest_session', JSON.stringify(currentUser));
        }
      } else {
        localStorage.removeItem('matsya_current_user');
        sessionStorage.removeItem('matsya_guest_session');
      }
    } catch (e) {
      console.error('Failed to sync current user session', e);
    }
  }, [currentUser]);

  // Login method
  const login = (identifier, password) => {
    const cleanId = identifier.trim().toLowerCase();
    const foundUser = registeredUsers.find(
      (u) =>
        (u.email?.toLowerCase() === cleanId || u.mobile?.trim() === cleanId) &&
        u.password === password
    );

    if (foundUser) {
      localStorage.setItem('matsya_current_user', foundUser.id);
      setCurrentUser(foundUser);
      return { success: true };
    }

    return { success: false, error: 'Invalid email/mobile number or password.' };
  };

  // Signup method
  const signup = (userData) => {
    const cleanMobile = userData.mobile.trim();
    const cleanEmail = userData.email ? userData.email.trim().toLowerCase() : '';

    // Check if account already exists
    const existingUser = registeredUsers.find(
      (u) => u.mobile === cleanMobile || (cleanEmail && u.email && u.email.toLowerCase() === cleanEmail)
    );

    if (existingUser) {
      return { success: false, error: 'An account with this mobile number or email already exists.' };
    }

    const newId = 'user_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const newUser = {
      id: newId,
      fullName: userData.fullName.trim(),
      mobile: cleanMobile,
      email: cleanEmail,
      coastalRegion: userData.coastalRegion || userData.region || 'Karnataka Coast',
      primaryHarbor: userData.primaryHarbor || userData.harbor || 'Mangaluru Old Port',
      vesselName: userData.vesselName?.trim() || 'Vessel Not Configured',
      registrationNo: 'IND-KA-' + Math.floor(1000 + Math.random() * 9000),
      vesselType: 'Coastal Fishing Boat',
      engineHp: '50 HP Outboard',
      fuelCapacityL: 100,
      crewCapacity: 4,
      password: userData.password
    };

    const updatedUsers = [...registeredUsers, newUser];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('matsya_users', JSON.stringify(updatedUsers));
    localStorage.setItem('matsya_current_user', newId);
    setCurrentUser(newUser);

    return { success: true };
  };

  // Guest login method
  const guestLogin = () => {
    const guestId = 'guest_' + Date.now();
    const guestUser = {
      id: guestId,
      fullName: 'Guest Fisher',
      mobile: 'N/A',
      email: 'guest@matsyasathi.in',
      coastalRegion: 'Karnataka Coast',
      primaryHarbor: 'Mangaluru Old Port',
      vesselName: 'Guest Vessel',
      registrationNo: 'Guest Session',
      vesselType: 'Small Motorized Boat',
      engineHp: '15 HP Outboard',
      fuelCapacityL: 30,
      crewCapacity: 3,
      isGuest: true
    };

    localStorage.setItem('matsya_current_user', guestId);
    sessionStorage.setItem('matsya_guest_session', JSON.stringify(guestUser));
    setCurrentUser(guestUser);
    return { success: true };
  };

  // Update profile method
  const updateProfile = (updatedFields) => {
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      ...updatedFields
    };

    setCurrentUser(updatedUser);

    if (!updatedUser.isGuest) {
      const updatedUsers = registeredUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u));
      setRegisteredUsers(updatedUsers);
      localStorage.setItem('matsya_users', JSON.stringify(updatedUsers));
    } else {
      sessionStorage.setItem('matsya_guest_session', JSON.stringify(updatedUser));
    }
  };

  // Logout method
  const logout = () => {
    localStorage.removeItem('matsya_current_user');
    sessionStorage.removeItem('matsya_guest_session');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        registeredUsers,
        login,
        signup,
        guestLogin,
        updateProfile,
        logout,
        isAuthenticated: !!currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
