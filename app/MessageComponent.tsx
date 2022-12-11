import Image from 'next/image';
import { Message } from '../typings';

type Props = {
  message: Message;
};
function MessageComponent({ message }: Props) {
  const { profilePic, message: sentMessage, username, created_at } = message;
  return (
    <div className="flex w-fit">
      <div className="flex-shrink-0">
        <Image
          src={profilePic}
          alt="Icon"
          width={50}
          height={10}
          className="rounded-full mx-2"
        />
      </div>
      <div>
        <p className="text-[0.65rem] px-[2px] pb-[2px]">{username}</p>
        <div className="flex items-end">
          <div className="px-3 py-2 rounded-lg w-fit text-white bg-blue-500">
            <p>{sentMessage}</p>
          </div>
          <p className="text-[0.65rem] italic px-2 text-gray-300">
            {new Date(created_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
