import { Text } from "@/components/text";

export interface HeaderProps {
  title: string;
  date: Date;
}

export function Header({ title, date }: HeaderProps) {
  return (
    <div className="w-full">
      <div className="bg-violet-700/50 backdrop-blur-md">
        <div className=" w-full h-full max-w-5xl mx-auto flex flex-col justify-end pt-12 md:pt-20 pb-12 md:pb-20 pl-1">
          <div className="border-l-2 border-clementine pl-7">
            <Text.h1>{title}</Text.h1>

            <div className="mt-4">
              <Text.h4>{`${date.toDateString()} - Frank Hartman`}</Text.h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
