import type { EmptyStateCardProps } from '../../constants/interface';

const EmptyStateCard = ({
  emptyImage,
  emptyLink,
  emptyButton,
}: EmptyStateCardProps ) => {
  return (
  <div className="flex items-center justify-center w-[100%] h-[260px] bg-white p-4 my-4 rounded">
      <div className='flex flex-col items-center gap-2'>
        <img width={72} height={72} src={emptyImage} alt="empty_image" />
        <h6 className="text-xs">No Request yet</h6>
        <a href={emptyLink} className="text-decoration-none">
          <button className="w-[153px] h-[40px] rounded-sm px-6 py-3 text-center font-medium text-white bg-[#0D6EFD] text-xs">
            {emptyButton}
          </button>
        </a>
      </div>
    </div>
  );
};

export default EmptyStateCard
