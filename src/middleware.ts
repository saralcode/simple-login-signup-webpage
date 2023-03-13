import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'





// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get("token").value;
    // console.log(token)
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    const res = await fetch(`http://localhost:3000/api/validate?token=${token}`)
    const data = await res.json()
    // console.log(data)
    // console.log(user)

    if (data) {
      return NextResponse.next();
    } else {
      // NextResponse.
      return NextResponse.redirect(new URL('/login', request.url))
    }


  } catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL('/login', request.url))
  }

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/about-us', '/contact-us'],
}