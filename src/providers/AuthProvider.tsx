"use client"

import { authenticateUserOrCreateAccount } from '@/actions/auth.actions'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'


const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    // const params = useSearchParams()
    // const id = params.get('id')

    const id = crypto.randomUUID()

    // const pointsInLocalStorage = window.localStorage.getItem("points")

    useEffect(() => {
        const authToken = window.localStorage.getItem('authToken')
        const authentication = async () => {
            if (!authToken && authToken != id) {

                const authenticate = await authenticateUserOrCreateAccount({ chatId: id! })
                if (authenticate === 'success') {
                    localStorage.setItem('authToken', `${id}`)
                }
                else {
                    console.log(authenticate)
                    alert("Could not authenticate you")
                }

            }
            else { console.log("Authenticated", authToken) }
        }

        authentication()
    }, [])


    return (
        <div>
            {children}
        </div>
    )
}

export default AuthProvider