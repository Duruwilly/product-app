const AddPhoto = (props: IconProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_2_1203"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <rect width={24} height={24} fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2_1203)">
      <path
        d="M20.3334 12V14.5833C20.3334 16.4502 20.3334 17.3836 19.97 18.0966C19.6505 18.7238 19.1405 19.2338 18.5133 19.5534C17.8003 19.9167 16.8669 19.9167 15 19.9167H9.00002C7.13318 19.9167 6.19976 19.9167 5.48672 19.5534C4.85951 19.2338 4.34958 18.7238 4.03 18.0966C3.66669 17.3836 3.66669 16.4502 3.66669 14.5833V10.25C3.66669 8.38316 3.66669 7.44974 4.03 6.7367C4.34958 6.10949 4.85951 5.59955 5.48672 5.27998C6.19976 4.91667 7.13318 4.91667 9.00002 4.91667H12.4167M17.8334 9.08333V4.08333M15.3334 6.58333H20.3334M15.3334 12.4167C15.3334 14.2576 13.841 15.75 12 15.75C10.1591 15.75 8.66669 14.2576 8.66669 12.4167C8.66669 10.5757 10.1591 9.08333 12 9.08333C13.841 9.08333 15.3334 10.5757 15.3334 12.4167Z"
        stroke={props.color || "white"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
export default AddPhoto;
