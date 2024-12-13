const sizeVariants = {
    small: 'w-10 h-10',
    medium: 'w-10 h10 md:w-12 md:h-12',
    large: 'w-10 h-10 md:w-16 md:h-16',
}

const Logo = ({size, className = ''}) => {
    const customSize = sizeVariants[size] || sizeVariants.small;
    return (
        <>
            <svg width="60" height="60" viewBox="0 0 65 65" className={`${customSize} ${className}`}>
                <defs id="SvgjsDefs3499">
                    <linearGradient id="SvgjsLinearGradient3504">
                        <stop id="SvgjsStop3505" stopColor="#ef4136" offset="0"></stop>
                        <stop id="SvgjsStop3506" stopColor="#fbb040" offset="1"></stop>
                    </linearGradient>
                </defs>
                <g transform="matrix(0.7983576642335767,0,0,0.7983576642335767,-7.983576642335767,-7.983576642335767)"
                   fill="url(#SvgjsLinearGradient3504)">
                    <path xmlns="http://www.w3.org/2000/svg"
                          d="M35,65.833c0-8.587,3.535-16.36,9.219-21.956c-3.063-1.406-6.458-2.21-10.052-2.21C20.82,41.667,10,52.487,10,65.833  C10,79.18,20.82,90,34.167,90c3.594,0,6.988-0.804,10.052-2.21C38.535,82.194,35,74.421,35,65.833z"></path>
                    <path xmlns="http://www.w3.org/2000/svg"
                          d="M65.833,65c-8.587,0-16.36-3.535-21.956-9.222c-1.406,3.066-2.21,6.461-2.21,10.055C41.667,79.18,52.487,90,65.833,90  C79.18,90,90,79.18,90,65.833c0-3.594-0.804-6.988-2.21-10.055C82.194,61.465,74.421,65,65.833,65z"></path>
                    <path xmlns="http://www.w3.org/2000/svg"
                          d="M65.833,10c-3.594,0-6.988,0.804-10.055,2.21C61.465,17.806,65,25.579,65,34.167c0,8.587-3.535,16.36-9.222,21.956  c3.066,1.406,6.461,2.21,10.055,2.21C79.18,58.333,90,47.513,90,34.167C90,20.82,79.18,10,65.833,10z"></path>
                    <path xmlns="http://www.w3.org/2000/svg"
                          d="M34.167,35c8.587,0,16.36,3.535,21.956,9.219c1.406-3.063,2.21-6.458,2.21-10.052C58.333,20.82,47.513,10,34.167,10  C20.82,10,10,20.82,10,34.167c0,3.594,0.804,6.988,2.21,10.052C17.806,38.535,25.579,35,34.167,35z"></path>
                </g>
            </svg>
        </>
    );
};

export default Logo;
