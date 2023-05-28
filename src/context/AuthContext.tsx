import React, { createContext, useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged, User } from "@firebase/auth";
import { auth } from "@/utils/firebase";

interface AuthContextProps {
	user: User | null;
}

export const AuthContext = createContext<AuthContextProps>({ user: null });

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		return onAuthStateChanged(auth, setUser);
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};
