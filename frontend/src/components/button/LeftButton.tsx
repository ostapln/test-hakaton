const LeftButton: React.FC = () => {
    return (
      <button className="flex items-center justify-center p-2 rounded-md bg-gray-200 hover:bg-gray-300">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 10l-3-3m0 6l-3-3" />
        </svg>
      </button>
    );
  };
  export default LeftButton;