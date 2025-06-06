import React, { useState, useEffect } from "react";
import { inter } from "./font";

const AnimatedText = () => {
	const [displayText, setDisplayText] = useState("ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃ");
	const finalText = "Alok (alok8bb) 🔺";
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
						() => japaneseChars[Math.floor(Math.random() * japaneseChars.length)],
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

	const trianglePosition = Array.from(finalText).indexOf("🔺");

	return (
		<div className="glitch-wrapper mb-4">
			<h1
				className="text-3xl sm:text-4xl font-bold glitch layers text-center sm:text-left relative"
				data-text={displayText}
			>
				<span>
					{Array.from(displayText).map((char, index) => {
						const isTrianglePosition = index === trianglePosition;
						const isRevealed = index >= displayText.length - (finalText.length - displayText.replace(/[ｱ-ﾝ]/g, "").length);

						if (isTrianglePosition) {
							return (
								<span
									key={index}
									className={`group relative ${isRevealed ? inter.className : ""}`}
								>
									{char}
									<div className="font-normal pointer-events-none z-50 absolute left-0 mt-2 w-64 sm:w-80 md:w-96 lg:w-max bg-slate-900/95 border border-slate-700/50 backdrop-blur-sm text-slate-100 rounded-md p-2 text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-normal break-words">
										probably a member of a secretive organisation of boundless guile and intellect in search of forbidden knowledge
									</div>
								</span>
							);
						}

						return (
							<span
								key={index}
								className={isRevealed ? inter.className : ""}
							>
								{char}
							</span>
						);
					})}
				</span>
			</h1>
		</div>
	);
};

export default AnimatedText;