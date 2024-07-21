"use client"

import { authenticateUserOrCreateAccount } from "@/actions/auth.actions"

const AuthPage = async ({ params }: { params: { chatId: string } }) => {

    const chatId = params.chatId

    const userExist = await authenticateUserOrCreateAccount({ chatId })

    return (
        <div>AuthPage</div>
    )
}

export default AuthPage