"use client";
import {ReactNode, useMemo} from "react";
import {ConvexProviderWithAuth, ConvexReactClient} from "convex/react";
import {Session} from "next-auth";
import {SessionProvider, useSession} from "next-auth/react";
import AnimatedCursor from "@/components/hooks";
import "./globals.css";

// const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// function convexTokenFromSession(session: Session | null): string | null {
// 	return session?.convexToken ?? null;
// }

// function useAuth() {
// 	const {data: session, update} = useSession();

// 	const convexToken = convexTokenFromSession(session);
// 	return useMemo(
// 		() => ({
// 			isLoading: false,
// 			isAuthenticated: session !== null,
// 			fetchAccessToken: async ({
// 				forceRefreshToken,
// 			}: {
// 				forceRefreshToken: boolean;
// 			}) => {
// 				if (forceRefreshToken) {
// 					const session = await update();

// 					return convexTokenFromSession(session);
// 				}
// 				return convexToken;
// 			},
// 		}),
// 		// We only care about the user changes, and don't want to
// 		// bust the memo when we fetch a new token.
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 		[JSON.stringify(session?.user)]
// 	);
// }

export default function Providers({
	children,
	// session,
}: {
	children: ReactNode;
	// session: Session | null;
}) {
	return (
		// <SessionProvider session={session}>
		//   <ConvexProviderWithAuth client={convex} useAuth={useAuth}>

		<>
			<div className="cursor__dot">
				<AnimatedCursor
					innerSize={15}
					outerSize={15}
					color="255, 255 ,255"
					outerAlpha={0.4}
					innerScale={0.7}
					outerScale={5}
					outerStyle={{}}
					innerStyle={{}}
					trailingSpeed={8}
					clickables={["a", "button"]}
				/>
			</div>

			<>{children}</>
		</>
		//   </ConvexProviderWithAuth>
		// </SessionProvider>
	);
}
