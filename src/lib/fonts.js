import {Poppins} from "next/font/google";

const poppins = Poppins({
    weight: ["100","200","300","400","500","600","700","800","900"],
    subsets: ["latin"],
    style: ['normal', 'italic'],
    display: "swap",
    variable: "--font-poppins",
})

export default poppins 