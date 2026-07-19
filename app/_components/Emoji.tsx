
interface EmojiProps {
	symbol: string;
	label: string;
	size?: string;
}

export function Emoji({ symbol, label, size = "1rem" }: EmojiProps) {
	return (
		<span 
			role="img" 
			aria-label={label} 
			aria-hidden={label ? "false" : "true"}
			style={{
				fontSize: size,
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				lineHeight: 1
			}}
		>
			{symbol}
		</span>
	)
}