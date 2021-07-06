const PopUpImageText = ({
	imgLeft,
	img,
	linkPosition,
	redirectUrl,
	noRedirect,
	forShopee,
	onClick,
	imgWidth,
	imgHeight,
	imageTopPosition,
	onLinkClick,
}) => {
	return (
		<>
			<div
				onClick={onClick}
				style={{
					backgroundColor: 'rgba(73, 194, 234, 0.5)',
					position: 'fixed',
					top: '0',
					bottom: '0',
					zIndex: '1',
					width: '100%',
				}}></div>
			<div
				onClick={onClick}
				style={{
					position: 'absolute',
					top: imageTopPosition ? imageTopPosition : '150px',
					bottom: '0',
					margin: 'auto',
					left: '0',
					right: imgLeft ? imgLeft : '0',
					zIndex: '5',
					width: imgWidth ? imgWidth : '300px',
					height: imgHeight ? imgHeight : '500px',
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			/>
			{forShopee ? (
				<a href={redirectUrl} target='_blank' rel='noreferrer'>
					<div
						style={{
							// backgroundColor: 'green',
							position: 'absolute',
							top: linkPosition,
							bottom: '0',
							margin: 'auto',
							left: '0',
							right: '-4%',
							zIndex: '10',
							width: '240px',
							height: '4rem',
						}}
					/>
				</a>
			) : noRedirect ? (
				<div
					onClick={onLinkClick}
					style={{
						position: 'absolute',
						top: linkPosition,
						bottom: '0',
						margin: 'auto',
						left: '0',
						right: '-4%',
						zIndex: '10',
						width: '240px',
						height: '4rem',
					}}
				/>
			) : (
				<a href={redirectUrl}>
					<div
						style={{
							// backgroundColor: 'green',
							position: 'absolute',
							top: linkPosition,
							bottom: '0',
							margin: 'auto',
							left: '0',
							right: '-4%',
							zIndex: '10',
							width: '240px',
							height: '4rem',
						}}
					/>
				</a>
			)}
		</>
	);
};

module.exports = PopUpImageText;
