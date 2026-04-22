import { useEffect } from 'react'

type Tenant = {
  id: string
  name: string
}

type WidgetUser = {
  id: string
  name: string
  email: string
  role: string
  tenant?: Tenant
}

type WidgetApi = {
  setUser: (user: WidgetUser) => void
  clearUser: () => void
}

declare global {
  interface Window {
    __gfpWidget?: WidgetApi
  }
}

export function useWidgetUser(user: WidgetUser | null) {
  useEffect(() => {
    if (user && window.__gfpWidget) {
      window.__gfpWidget.setUser({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        tenant: user.tenant
      })
    } else if (!user && window.__gfpWidget) {
      window.__gfpWidget.clearUser()
    }
  }, [user])
}
