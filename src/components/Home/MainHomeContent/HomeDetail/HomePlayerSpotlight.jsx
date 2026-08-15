import HomeSharedContent from "./HomeSharedContent";
import HomeTransfersItem from "./HomeTransfersItem";

export default function HomeTransfers({ transfers, selectedTransferTeam }) {
  return (
    <HomeSharedContent
      col={2}
      title={
        <div className="flex items-center gap-2">
          <span>Latest Transfers</span>

          {selectedTransferTeam && (
            <img
              src={`https://media.api-sports.io/football/teams/${selectedTransferTeam.id}.png`}
              alt={selectedTransferTeam.name}
              title={selectedTransferTeam.name}
              className="h-5 w-5 object-contain"
            />
          )}
        </div>
      }
    >
      {transfers?.map((transfer, index) => (
        <HomeTransfersItem
          key={`${transfer.player.id}-${transfer.date}-${index}`}
          transfer={transfer}
        />
      ))}
    </HomeSharedContent>
  );
}
