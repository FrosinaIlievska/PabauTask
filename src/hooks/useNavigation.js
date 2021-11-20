import { useState, useEffect, useCallback } from 'react';

const useNavigation = navRef => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClickOutside = useCallback(
        e => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        },
        [navRef]
    );

    // Click Outside
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);


    return {
        isMenuOpen,
        setIsMenuOpen,
    };
};

export default useNavigation;
