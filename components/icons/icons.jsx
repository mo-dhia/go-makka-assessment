
export function Menu(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512" {...props}><path fill="currentColor" d="M32 96v64h448V96zm0 128v64h448v-64zm0 128v64h448v-64z"></path></svg>);
}

export function BookmarkIcon({ strokeWidth = 1.5, ...props }) {
  return (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid meet" {...props}>
      <path
        d="M15 10a10 10 0 0 1 10-10h50a10 10 0 0 1 10 10v78L60 78 35 88V10Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}