import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import { AnimationRoutes, App, SnackbarProvider, ZMPRouter } from 'zmp-ui'
import HomePage from './pages/home'
import OrdersPage from './pages/orders'
import CategoryPage from './pages/category'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
    },
  },
})
const Layout = () => {
  return (
    <App>
      <Suspense>
        <QueryClientProvider client={queryClient}>
          {/* <SnackbarProvider> */}
            {/* <RootProvider> */}
              <ZMPRouter>
                <AnimationRoutes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/category" element={<CategoryPage />} />
                  <Route path="/order" element={<OrdersPage />} />
                  <Route path="/cart" element={<OrdersPage />} />
                </AnimationRoutes>
              </ZMPRouter>
            {/* </RootProvider> */}
          {/* </SnackbarProvider> */}
        </QueryClientProvider>
      </Suspense>
    </App>
  )
}

export default Layout;
