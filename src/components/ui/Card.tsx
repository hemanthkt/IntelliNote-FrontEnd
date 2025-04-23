import { ShareIcon } from "../../icons/ShareIcon";

declare global {
  interface Window {
    twttr: any;
  }
}

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className="p-4 rounded-md max-w-72 min-w-72 min-h-48 bg-white outline-slate-200 border border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <ShareIcon size="md" />
            </div>
            {title}
          </div>

          <div className="flex">
            <div className="pr-2 text-gray-500">
              <a href={link}>
                {" "}
                <ShareIcon size="md" />
              </a>
            </div>

            <div className="pr-2 text-gray-500">
              <ShareIcon size="md" />
            </div>
          </div>
        </div>

        <div className="pt-4 ">
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x", "twitter")}></a>
            </blockquote>
          )}

          {type === "youtube" && (
            <iframe
              className="w-full rounded-md"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}
