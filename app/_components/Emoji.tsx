
interface EmojiProps {
	symbol: string;
	label: string;
	size?: string;
}

export function Emoji({ symbol, label }: EmojiProps) {
	return (
		<span 
			role="img" 
			aria-label={label} 
			aria-hidden={label ? "false" : "true"}
			style={{
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			{symbol}
		</span>
	)
}