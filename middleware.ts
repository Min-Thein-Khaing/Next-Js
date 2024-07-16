export {default} from "next-auth/middleware";




// export function middleware(request:NextRequest){
//     return NextResponse.redirect(new URL('/new-user',request.url));
// }

export const config = {
    //* zero to more
    //+ one to more
    //? zero to one
    matcher:['/dashboard/:path*']
}