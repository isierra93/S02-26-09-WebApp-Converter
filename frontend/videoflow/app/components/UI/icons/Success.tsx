export default function SuccessIcon() {
    return (
        <svg
            viewBox="0 0 150 150"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 m-auto"
            fill="none"
        >
           
            <circle cx="75" cy="75" r="56" fill="#2F27CE" />
            <circle
                cx="75"
                cy="75"
                r="63"
                stroke="#433BFF"
                strokeOpacity="0.4"
                strokeWidth="12"
                fill="none"
            />
            <path
                d="M95 62L70 87L58 75"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
