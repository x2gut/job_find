const Avatar = ({
  profilePicture,
  size = "3rem", // Устанавливаем значение по умолчанию для size
}: {
  profilePicture?: string | null | undefined;
  size?: string; // Тип для size
}) => {
  return (
    <div
      style={{
        backgroundImage: profilePicture ? `url(${profilePicture})` : "",
        width: size, // Устанавливаем ширину в зависимости от size
        height: size, // Устанавливаем высоту в зависимости от size
      }}
      className="relative overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex-shrink-0 bg-center bg-cover"
    >
      {!profilePicture && (
        <svg
          className="absolute text-gray-400 -left-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: `calc(${size} + 0.5rem)`, // Увеличиваем размер иконки относительно аватара
            height: `calc(${size} + 0.5rem)`,
          }}
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default Avatar;
