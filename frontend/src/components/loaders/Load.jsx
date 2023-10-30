import React, { Suspense } from 'react'

const load = (Component) => props => (
    <Suspense fallback={<>espere...</>}>
        <Component {...props} />
    </Suspense>
)

export default load
