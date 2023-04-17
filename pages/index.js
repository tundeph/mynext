import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<div>
			<h1> Home </h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum numquam
				amet quam. Omnis veritatis repellat, beatae dolorem in, itaque rerum
				aliquam odit autem perferendis adipisci quos saepe nam eum repellendus!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum numquam
				amet quam. Omnis veritatis repellat, beatae dolorem in, itaque rerum
				aliquam odit autem perferendis adipisci quos saepe nam eum repellendus!
			</p>
			<a className={styles.btn}> See details</a>
		</div>
	)
}
