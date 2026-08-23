import React, { createContext, useContext, useState, useEffect } from 'react';

// Pre-seeded default users for demo / initial state
const DEFAULT_REGISTERED_USERS = [
  {
    id: 'user_ramesh',
    fullName: 'Ramesh Kumar',
    mobile: '9876543210',
    email: 'ramesh@matsyasathi.in',
    coastalRegion: 'Karnataka Coast',
    primaryHarbor: 'Mangaluru Old Port',
    vesselName: 'Matsya Star',
    registrationNo: 'IND-KA-04-1082',
    vesselType: 'Small Motorized Boat',
    engineHp: '25 HP Outboard',
    fuelCapacityL: 40,
    crewCapacity: 4,
    password: 'password123'
  },
  {
    id: 'user_suresh',
    fullName: 'Suresh Naik',
    mobile: '9876543211',
    email: 'suresh@matsyasathi.in',
    coastalRegion: 'Karnataka Coast',
    primaryHarbor: 'Malpe Harbor',
    vesselName: 'Sea King',
    registrationNo: 'IND-KA-02-2491',
    vesselType: 'Medium Fishing Vessel',
    engineHp: '120 HP Inboard',
    fuelCapacityL: 200,
    crewCapacity: 6,
    password: 'password123'
  }
];

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // 1. Registered Users List (stored in localStorage)
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    try {
      const saved = localStorage.getItem('matsya_registered_users');
      return saved ? JSON.parse(saved) : DEFAULT_REGISTERED_USERS;
    } catch (e) {
      return DEFAULT_REGISTERED_USERS;
    }
  });

  // 2. Currently Authenticated User Session (stored in localStorage)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('matsya_current_user');
      return saved ? JSON.parse(saved) : DEFAULT_REGISTERED_USERS[0];
    } catch (e) {
      return DEFAULT_REGISTERED_USERS[0];
    }
  });

  // Sync registeredUsers to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('matsya_registered_users', JSON.stringify(registeredUsers));
    } catch (e) {
      console.error('Failed to save registered users to localStorage', e);
    }
  }, [registeredUsers]);

  // Sync currentUser to localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('matsya_current_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('matsya_current_user');
      }
    } catch (e) {
      console.error('Failed to save current user session to localStorage', e);
    }
  }, [currentUser]);

  // Login method
  const login = (identifier, password) => {
    const cleanId = identifier.trim().toLowerCase();
    const foundUser = registeredUsers.find(
      (u) => (u.email.toLowerCase() === cleanId || u.mobile.trim() === cleanId) && u.password === password
    );

    if (foundUser) {
      setCurrentUser(foundUser);
      return { success: true };
    }

    return { success: false, error: 'Invalid email/mobile number or password.' };
  };

  // Signup method
  const signup = (userData) => {
    const cleanMobile = userData.mobile.trim();
    const cleanEmail = userData.email ? userData.email.trim().toLowerCase() : '';

    // Check if user already exists
    const existing = registeredUsers.find(
      (u) => (u.mobile.trim() === cleanMobile) || (cleanEmail && u.email.toLowerCase() === cleanEmail)
    );

    if (existing) {
      return { success: false, error: 'An account with this mobile number or email already exists.' };
    }

    const newUser = {
      id: 'user_' + Date.now(),
      fullName: userData.fullName.trim(),
      mobile: cleanMobile,
      email: cleanEmail,
      coastalRegion: userData.region || 'Karnataka Coast',
      primaryHarbor: userData.harbor || 'Mangaluru Old Port',
      vesselName: userData.vesselName?.trim() || 'Vessel Not Configured',
      registrationNo: 'Registration Pending',
      vesselType: 'Coastal Fishing Boat',
      engineHp: 'Engine Not Configured',
      fuelCapacityL: 100,
      crewCapacity: 4,
      password: userData.password
    };

    setRegisteredUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    return { success: true };
  };

  // Guest login method
  const guestLogin = () => {
    const guestUser = {
      id: 'guest_' + Date.now(),
      fullName: 'Guest Fisher',
      mobile: 'N/A',
      email: 'guest@matsyasathi.in',
      coastalRegion: 'Karnataka Coast',
      primaryHarbor: 'Mangaluru Old Port',
      vesselName: 'Guest Vessel',
      registrationNo: 'Guest Session',
      vesselType: 'Small Traditional Boat',
      engineHp: '15 HP Outboard',
      fuelCapacityL: 30,
      crewCapacity: 3,
      isGuest: true
    };
    setCurrentUser(guestUser);
    return { success: true };
  };

  // Update profile method (e.g. from Settings)
  const updateProfile = (updatedFields) => {
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      ...updatedFields
    };

    setCurrentUser(updatedUser);

    // Update in registeredUsers array if not a transient guest session
    if (!updatedUser.isGuest) {
      setRegisteredUsers((prev) =>
        prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );
    }
  };

  // Logout method
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('matsya_current_user');
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
