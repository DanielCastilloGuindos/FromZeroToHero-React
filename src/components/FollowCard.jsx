export const FollowCard = ( { name, nickname, url, isFollowing } ) => {

	return (
		<article
		style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
			<header
				style={{display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem"}}>
				<img
					style={{ borderRadius: "50%", objectFit: "cover", accentColor: "red" }}
					src={ url }
					alt=""
					width={50}
					height={50} />
				<div style={{ display: "flex", flexDirection: "column",	color: "white"}}>
					<strong style={{ fontSize: "1.2rem", fontWeight: "bold", color: "white" }}>{name}</strong>
					<span>@{ nickname }</span>
				</div>
			</header>

			<aside style={{ height: "100%", display: "flex", justifyContent:"center", alignItems: "center"}}>
				<button style={{ backgroundColor: "", color: "", padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "none", cursor: "pointer" }}>Seguir</button>
			</aside>
		</article>
	);
};