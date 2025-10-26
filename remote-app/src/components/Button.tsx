interface IButtonProps {
    text: string;
    onClick?: () => void;
}

const Button = ({ text, onClick }: IButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 hover:cursor-pointer"
        >
                {text}
        </button>
    );
}
export default Button;