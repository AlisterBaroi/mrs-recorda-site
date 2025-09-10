export interface DownloadItem {
  title: string;
  icon: string;
  show: boolean;
  link: string;
}

export const DOWNLOAD_LIST: DownloadItem[] = [
  { title: 'Windows ↓', icon: 'windows', show: true, link: 'https://microsoft.com' },
  { title: 'Linux ↓', icon: 'linux', show: true, link: 'https://google.com' },
  { title: 'MacOS ↓', icon: 'apple', show: true, link: 'https://apple.com' }
];
