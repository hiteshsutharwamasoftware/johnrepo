import { createContext, useContext } from 'react'

type Tenant = {
  id: string
  name: string
}

type AuthUser = {
  id: string
  name: string
  email: string
  role: string
  tenant?: Tenant
}

type AuthContextValue = {
  user: AuthUser | null
}

const mockUser: AuthUser = {
  id: 'demo-user-1',
  name: 'Demo User',
  email: 'demo@verity.local',
  role: 'admin',
  tenant: {
    id: 'tenant-1',
    name: 'Demo Tenant'
  }
}

const AuthContext = createContext<AuthContextValue>({ user: mockUser })

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthContext.Provider value={{ user: mockUser }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
