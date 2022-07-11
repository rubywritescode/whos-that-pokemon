import { Composition } from 'remotion';
import Pokemon from './Pokemon';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="Pokemon"
				component={Pokemon}
				durationInFrames={300}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
