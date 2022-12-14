import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { Message } from '../typings';
import TimeAgo from 'react-timeago';

type Props = {
  message: Message;
};

function MessageComponent({ message }: Props) {
  const { profilePic, message: sentMessage, username, created_at } = message;
  const { data: session } = useSession();
  const isUser = session?.user?.email === message.email;

  return (
    <div className={`flex w-fit ${isUser && 'ml-auto'}`}>
      <div className={`flex-shrink-0 ${isUser && 'order-2'}`}>
        <Image
          src={profilePic}
          alt="Icon"
          width={50}
          height={10}
          className="rounded-full mx-2"
        />
      </div>
      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px] ${
            isUser ? 'text-right' : 'text-left'
          }`}
        >
          {username}
        </p>
        <div className="flex items-end">
          <div
            className={`px-3 py-2 rounded-lg w-fit text-white ${
              isUser ? 'bg-orange-400 ml-auto order-2' : 'bg-gray-400'
            }`}
          >
            <p>{sentMessage}</p>
          </div>
          <p
            className={`text-[0.65rem] italic px-2 text-gray-300 ${
              isUser && 'text-right'
            }`}
          >
            <TimeAgo date={new Date(created_at)} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
