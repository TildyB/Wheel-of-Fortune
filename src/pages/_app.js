import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import { UserProvider } from "@/contexts/UserContext";
import { Changa } from "next/font/google";
const changa = Changa({ subsets: ["latin"] });

const theme = extendTheme({
  colors: {
    main: {
      100: "#BE9431",
      200: "#294A42",
      300: "#1D1F24",
    },
  },
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <main className={changa.className}>
          <Component {...pageProps} />
        </main>
      </UserProvider>
    </ChakraProvider>
  );
}
