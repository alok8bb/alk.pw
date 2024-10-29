import React, { useState, useEffect } from "react";
import { inter } from "./font";

const AnimatedText = () => {
	const [displayText, setDisplayText] = useState("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃ");
	const finalText = "Hey there! I'm Alok. 👋🏼";
	const japaneseChars = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ";

	useEffect(() => {
		let currentIndex = 0;
		const intervalId = setInterval(() => {
			if (currentIndex <= finalText.length) {
				setDisplayText((prevText) => {
					const revealedText = finalText.slice(0, currentIndex);
					const remainingLength = finalText.length - revealedText.length;
					const randomChars = Array.from(
						{ length: remainingLength },
						() =>
							japaneseChars[Math.floor(Math.random() * japaneseChars.length)],
					).join("");
					return revealedText + randomChars;
				});
				currentIndex++;
			} else {
				clearInterval(intervalId);
			}
		}, 100);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="glitch-wrapper mb-4">
			<h1
				className="text-3xl sm:text-4xl font-bold glitch layers text-center sm:text-left"
				data-text={displayText}
			>
				<span>
					{displayText.split("").map((char, index) => (
						<span
							key={index}
							className={
								index >=
								displayText.length -
									(finalText.length - displayText.replace(/[ｱ-ﾝ]/g, "").length)
									? `${inter.className}`
									: ""
							}
						>
							{char}
						</span>
					))}
				</span>
			</h1>
		</div>
	);
};

export default AnimatedText;
