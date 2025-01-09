'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(state, formData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const {data : {user}, error} = await supabase.auth.signInWithPassword(data)

    if (error) {
        return { error: error }
    }

    revalidatePath('/', "layout")
    redirect('/dashboard')
}

export async function signup(state, formData) {
    const supabase = await createClient()

    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
        options: {
            data: {
                full_name: formData.get('full_name'),
                username: formData.get('username'),
                email: formData.get('email'),
            },
        }
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        return { error: error.message }
    }

    return {
        status: 'success',
    }
}
