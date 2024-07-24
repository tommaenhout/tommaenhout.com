import { useMediaQuery } from 'react-responsive'

const useScreenSizes = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    return {isMobile, isTablet};
};

export default useScreenSizes;