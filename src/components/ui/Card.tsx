import { useEffect } from "react";
import { ShareIcon } from "../../icons/ShareIcon";

declare global {
  interface Window {
    twttr: any;
  }
}

export function Card() {
  useEffect(() => {
    // Check if the Twitter widgets script has loaded
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <div>
      <div className="p-4 rounded-md max-w-72 bg-white outline-slate-200 border border-slate-200">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <ShareIcon size="md" />
            </div>
            Project Idea
          </div>

          <div className="flex">
            <div className="pr-2 text-gray-500">
              <ShareIcon size="md" />
            </div>

            <div className="pr-2 text-gray-500">
              <ShareIcon size="md" />
            </div>
          </div>
        </div>

        <div className="pt-4 ">
          {/* <iframe
            className="w-full rounded-md"
            src="https://www.youtube.com/embed/BQiisck38ls?si=JjujKZzqG1Kbo0Tb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}

          <blockquote className="twitter-tweet">
            <a href="https://x.com/thedankoe/status/1914340861787381901"></a>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
