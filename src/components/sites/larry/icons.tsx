import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { strokeWidth?: number; fillOpacity?: number };

export function SendIcon({ strokeWidth = 1.5, fillOpacity = 0, ...props }: IconProps) {
  void strokeWidth;
  void fillOpacity;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M 9.746 9.742 L 17.466 7.586 C 17.777 7.491 17.991 7.207 17.996 6.882 C 18.002 6.558 17.798 6.266 17.492 6.16 L 0.992 0.04 C 0.722 -0.052 0.423 0.017 0.221 0.219 C 0.019 0.42 -0.052 0.718 0.039 0.989 L 6.159 17.489 C 6.265 17.796 6.557 17.999 6.881 17.994 C 7.206 17.988 7.49 17.774 7.585 17.463 Z" transform="translate(4.504 4.508)" fill="currentColor" fillOpacity={fillOpacity} />
      <path d="M 9.746 9.742 L 17.466 7.586 C 17.777 7.491 17.991 7.207 17.996 6.882 C 18.002 6.558 17.798 6.266 17.492 6.16 L 0.992 0.04 C 0.722 -0.052 0.423 0.017 0.221 0.219 C 0.019 0.42 -0.052 0.718 0.039 0.989 L 6.159 17.489 C 6.265 17.796 6.557 17.999 6.881 17.994 C 7.206 17.988 7.49 17.774 7.585 17.463 Z" transform="translate(4.504 4.508)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowUpRightIcon({ strokeWidth = 1, fillOpacity = 0, ...props }: IconProps) {
  void strokeWidth;
  void fillOpacity;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M 13 0 L 0 13 M 13 0 L 3 0 M 13 0 L 13 10" transform="translate(5.5 5.5)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ strokeWidth = 1.5, fillOpacity = 0, ...props }: IconProps) {
  void strokeWidth;
  void fillOpacity;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M 0 0 L 0 15" transform="translate(12 4.5)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 15 0 L 0 0" transform="translate(4.5 12)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightLongIcon({ strokeWidth = 1, fillOpacity = 0, ...props }: IconProps) {
  void strokeWidth;
  void fillOpacity;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M 0 7 L 18 7 M 18 7 L 11 0 M 18 7 L 11 14" transform="translate(3 5)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ strokeWidth = 1.5, fillOpacity = 0, ...props }: IconProps) {
  void strokeWidth;
  void fillOpacity;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M 9.994 17.505 C 9.681 17.36 9.379 17.214 9.088 17.058 C 7.583 16.203 6.199 15.149 4.974 13.926 C 3.372 12.442 2.054 10.68 1.083 8.725 C 0.582 7.665 0.254 6.532 0.11 5.369 C -0.118 4.202 0.01 2.994 0.479 1.902 C 0.768 1.422 1.117 0.982 1.519 0.593 C 1.678 0.413 1.872 0.267 2.089 0.165 C 2.307 0.063 2.543 0.007 2.782 0 C 3.035 0.03 3.28 0.111 3.501 0.238 C 3.722 0.365 3.915 0.535 4.068 0.738 C 4.773 1.499 5.499 2.204 6.237 2.975 C 6.521 3.225 6.7 3.572 6.74 3.948 C 6.712 4.247 6.591 4.528 6.394 4.754 C 6.137 5.067 5.846 5.347 5.566 5.649 C 5.404 5.807 5.278 5.999 5.199 6.212 C 5.12 6.425 5.089 6.653 5.108 6.879 C 5.286 7.425 5.589 7.923 5.991 8.333 C 6.483 8.993 6.975 9.653 7.512 10.268 C 8.507 11.406 9.681 12.374 10.989 13.132 C 11.166 13.26 11.372 13.342 11.589 13.369 C 11.806 13.397 12.027 13.369 12.23 13.288 C 12.658 13.043 13.037 12.721 13.348 12.338 C 13.63 12.001 14.03 11.785 14.466 11.733 C 14.855 11.748 15.224 11.912 15.495 12.192 C 15.83 12.494 16.132 12.841 16.456 13.165 C 16.781 13.49 17.026 13.713 17.295 14.004 C 17.613 14.293 17.916 14.599 18.2 14.921 C 18.313 15.059 18.397 15.219 18.447 15.39 C 18.497 15.561 18.512 15.74 18.491 15.917 C 18.391 16.357 18.147 16.75 17.798 17.035 C 17.313 17.537 16.725 17.927 16.074 18.178 C 15.424 18.43 14.726 18.536 14.03 18.489 C 12.633 18.428 11.262 18.094 9.994 17.505 Z" transform="translate(2.75 2.75)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="miter" />
      <path d="M 5.59 0 L 0 5.593" transform="translate(13.124 5.267)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="miter" />
      <path d="M 3.354 3.356 L 3.354 0 L 0 0" transform="translate(15.36 5.255)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CrownIcon({ strokeWidth = 1.5, fillOpacity = 0, ...props }: IconProps) {
  void strokeWidth;
  void fillOpacity;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M 16.599 1.803 L 13.361 4.914 L 10.165 0.559 C 10.079 0.391 9.947 0.25 9.786 0.151 C 9.625 0.052 9.439 0 9.25 0 C 9.061 0 8.875 0.052 8.714 0.151 C 8.553 0.25 8.421 0.391 8.335 0.559 L 5.139 4.914 L 1.901 1.803 C 1.785 1.615 1.612 1.47 1.408 1.388 C 1.203 1.307 0.977 1.293 0.764 1.35 C 0.551 1.406 0.362 1.53 0.224 1.702 C 0.086 1.874 0.008 2.086 0 2.306 L 1.593 13.509 C 1.721 14.506 2.21 15.422 2.968 16.083 C 3.725 16.744 4.699 17.104 5.704 17.096 L 12.899 17.096 C 13.904 17.104 14.877 16.744 15.635 16.083 C 16.392 15.422 16.882 14.506 17.01 13.509 L 18.5 2.306 C 18.492 2.086 18.414 1.874 18.276 1.702 C 18.139 1.53 17.949 1.406 17.736 1.35 C 17.523 1.293 17.297 1.307 17.093 1.388 C 16.888 1.47 16.715 1.615 16.599 1.803 Z" transform="translate(2.75 3.452)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0 0 L 8 0" transform="translate(8 16.447)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BulbIcon({ strokeWidth = 1.5, fillOpacity = 0, ...props }: IconProps) {
  void strokeWidth;
  void fillOpacity;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M 10.55 6.129 C 10.265 8.493 8.716 9.438 8.047 10.125 C 7.378 10.812 7.497 10.95 7.543 11.958 C 7.551 12.083 7.533 12.208 7.49 12.326 C 7.447 12.443 7.381 12.551 7.295 12.642 C 7.209 12.733 7.106 12.805 6.991 12.855 C 6.876 12.904 6.752 12.93 6.627 12.93 L 3.969 12.93 C 3.844 12.93 3.72 12.904 3.605 12.855 C 3.49 12.805 3.386 12.733 3.3 12.642 C 3.215 12.551 3.148 12.443 3.106 12.326 C 3.063 12.208 3.045 12.083 3.052 11.958 C 3.052 10.968 3.144 10.739 2.548 10.125 C 1.787 9.364 0 8.292 0 5.341 C -0.005 4.608 0.143 3.881 0.433 3.208 C 0.722 2.535 1.149 1.929 1.684 1.429 C 2.22 0.928 2.854 0.544 3.545 0.301 C 4.237 0.058 4.971 -0.04 5.702 0.015 C 6.433 0.069 7.145 0.275 7.793 0.618 C 8.44 0.962 9.01 1.435 9.465 2.01 C 9.921 2.584 10.252 3.247 10.439 3.956 C 10.625 4.665 10.663 5.405 10.55 6.129 Z" transform="translate(6.702 6.362)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0 0 L 0 1.512 C 0 1.925 0.229 2.264 0.513 2.264 L 2.566 2.264 C 2.851 2.264 3.08 1.925 3.08 1.512 L 3.08 0" transform="translate(10.46 19.236)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 2.227 0 C 1.636 0 1.07 0.235 0.652 0.652 C 0.235 1.07 0 1.637 0 2.227" transform="translate(8.994 8.696)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0 0 L 1.833 0" transform="translate(19.332 11.904)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0 1.301 L 1.302 0" transform="translate(17.486 4.591)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0 0 L 1.302 1.302" transform="translate(18.486 16.999)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0 0 L 0.001 1.482" transform="translate(11.999 2.377)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0 0 L 1.292 1.301" transform="translate(5.24 4.591)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0 1.302 L 1.292 0" transform="translate(4.24 16.999)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 1.833 0 L 0 0" transform="translate(2.835 11.904)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GridIcon({ strokeWidth = 1.5, fillOpacity = 0, ...props }: IconProps) {
  void strokeWidth;
  void fillOpacity;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M 0.913 1.826 C 1.417 1.826 1.826 1.417 1.826 0.913 C 1.826 0.409 1.417 0 0.913 0 C 0.409 0 0 0.409 0 0.913 C 0 1.417 0.409 1.826 0.913 1.826 Z" transform="translate(11.087 5)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0.913 1.826 C 1.417 1.826 1.826 1.417 1.826 0.913 C 1.826 0.409 1.417 0 0.913 0 C 0.409 0 0 0.409 0 0.913 C 0 1.417 0.409 1.826 0.913 1.826 Z" transform="translate(17.175 5)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0.913 1.826 C 1.417 1.826 1.826 1.417 1.826 0.913 C 1.826 0.409 1.417 0 0.913 0 C 0.409 0 0 0.409 0 0.913 C 0 1.417 0.409 1.826 0.913 1.826 Z" transform="translate(4.999 5)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0.913 1.826 C 1.417 1.826 1.826 1.417 1.826 0.913 C 1.826 0.409 1.417 0 0.913 0 C 0.409 0 0 0.409 0 0.913 C 0 1.417 0.409 1.826 0.913 1.826 Z" transform="translate(11.087 11.087)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0.913 1.826 C 1.417 1.826 1.826 1.417 1.826 0.913 C 1.826 0.409 1.417 0 0.913 0 C 0.409 0 0 0.409 0 0.913 C 0 1.417 0.409 1.826 0.913 1.826 Z" transform="translate(17.175 11.087)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0.913 1.826 C 1.417 1.826 1.826 1.417 1.826 0.913 C 1.826 0.409 1.417 0 0.913 0 C 0.409 0 0 0.409 0 0.913 C 0 1.417 0.409 1.826 0.913 1.826 Z" transform="translate(4.999 11.087)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0.913 1.826 C 1.417 1.826 1.826 1.417 1.826 0.913 C 1.826 0.409 1.417 0 0.913 0 C 0.409 0 0 0.409 0 0.913 C 0 1.417 0.409 1.826 0.913 1.826 Z" transform="translate(11.087 17.174)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0.913 1.826 C 1.417 1.826 1.826 1.417 1.826 0.913 C 1.826 0.409 1.417 0 0.913 0 C 0.409 0 0 0.409 0 0.913 C 0 1.417 0.409 1.826 0.913 1.826 Z" transform="translate(17.175 17.174)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 0.913 1.826 C 1.417 1.826 1.826 1.417 1.826 0.913 C 1.826 0.409 1.417 0 0.913 0 C 0.409 0 0 0.409 0 0.913 C 0 1.417 0.409 1.826 0.913 1.826 Z" transform="translate(4.999 17.174)" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ strokeWidth = 1, fillOpacity = 0, ...props }: IconProps) {
  void strokeWidth;
  void fillOpacity;
  return (
    <svg viewBox="0 0 24.087 24" aria-hidden="true" {...props}>
      <path d="M 7.056 0.085 C 5.774 0.145 4.899 0.349 4.135 0.648 C 3.332 0.951 2.604 1.424 2.004 2.036 C 1.392 2.636 0.919 3.362 0.619 4.163 C 0.323 4.927 0.121 5.801 0.065 7.077 C 0.008 8.355 -0.005 8.765 0.001 12.023 C 0.008 15.282 0.022 15.69 0.085 16.97 C 0.146 18.247 0.35 19.119 0.65 19.881 C 0.959 20.67 1.372 21.338 2.043 22.004 C 2.646 22.613 3.375 23.084 4.179 23.384 C 4.945 23.679 5.821 23.88 7.103 23.936 C 8.386 23.992 8.798 24.005 12.068 23.999 C 15.337 23.992 15.749 23.978 17.033 23.917 C 18.318 23.857 19.188 23.652 19.954 23.354 C 20.757 23.051 21.484 22.577 22.084 21.966 C 22.696 21.365 23.169 20.639 23.469 19.837 C 23.765 19.074 23.967 18.201 24.022 16.925 C 24.079 15.645 24.093 15.235 24.086 11.977 C 24.08 8.72 24.066 8.311 24.004 7.031 C 23.944 5.751 23.739 4.883 23.438 4.12 C 23.134 3.32 22.659 2.596 22.046 1.997 C 21.444 1.387 20.715 0.916 19.91 0.617 C 19.144 0.323 18.269 0.121 16.986 0.067 C 15.704 0.01 15.292 -0.005 12.021 0.001 C 8.75 0.009 8.341 0.022 7.056 0.085 M 7.196 21.777 C 6.022 21.727 5.385 21.532 4.96 21.369 C 4.437 21.177 3.963 20.871 3.573 20.474 C 3.172 20.088 2.863 19.617 2.67 19.096 C 2.504 18.673 2.306 18.038 2.251 16.868 C 2.191 15.604 2.179 15.224 2.171 12.02 C 2.165 8.817 2.177 8.438 2.232 7.173 C 2.283 6.004 2.479 5.368 2.642 4.945 C 2.859 4.384 3.121 3.985 3.54 3.563 C 3.928 3.163 4.401 2.856 4.924 2.663 C 5.349 2.498 5.985 2.302 7.159 2.246 C 8.429 2.186 8.809 2.174 12.025 2.166 C 15.24 2.16 15.621 2.172 16.893 2.228 C 18.065 2.278 18.703 2.472 19.128 2.636 C 19.69 2.852 20.091 3.111 20.515 3.531 C 20.937 3.951 21.198 4.348 21.418 4.909 C 21.584 5.331 21.781 5.965 21.836 7.136 C 21.897 8.401 21.911 8.781 21.917 11.983 C 21.922 15.186 21.911 15.566 21.856 16.831 C 21.804 18.001 21.61 18.636 21.446 19.061 C 21.229 19.621 20.967 20.021 20.547 20.441 C 20.159 20.84 19.687 21.148 19.164 21.341 C 18.74 21.506 18.102 21.703 16.93 21.759 C 15.659 21.819 15.279 21.831 12.062 21.838 C 8.846 21.845 8.467 21.832 7.196 21.778 M 17.015 5.587 C 17.016 6.169 17.369 6.694 17.909 6.916 C 18.45 7.138 19.071 7.014 19.484 6.601 C 19.897 6.189 20.019 5.569 19.794 5.031 C 19.57 4.494 19.042 4.144 18.457 4.145 C 17.659 4.147 17.014 4.792 17.015 5.587 M 5.861 12.012 C 5.867 15.415 8.641 18.168 12.057 18.162 C 15.472 18.155 18.235 15.391 18.228 11.988 C 18.179 8.616 15.418 5.91 12.033 5.916 C 8.647 5.923 5.897 8.64 5.861 12.012 M 8.029 12.008 C 8.025 9.799 9.819 8.005 12.036 8.001 C 14.253 7.996 16.054 9.783 16.059 11.992 C 16.063 14.201 14.269 15.996 12.052 16 C 10.987 16.002 9.965 15.583 9.211 14.834 C 8.457 14.086 8.032 13.069 8.029 12.008" fill="currentColor" />
    </svg>
  );
}

export function ThreadsIcon({ strokeWidth = 1, fillOpacity = 0, ...props }: IconProps) {
  void strokeWidth;
  void fillOpacity;
  return (
    <svg viewBox="0 0 23.86 24" aria-hidden="true" {...props}>
      <path d="M 18.566 11.123 C 18.446 11.074 18.325 11.026 18.202 10.981 C 17.989 7.567 15.834 5.613 12.214 5.593 L 12.166 5.593 C 10.001 5.593 8.201 6.393 7.093 7.848 L 9.083 9.029 C 9.91 7.942 11.209 7.711 12.167 7.711 L 12.199 7.711 C 13.391 7.717 14.291 8.017 14.872 8.601 C 15.296 9.027 15.579 9.616 15.719 10.358 C 14.589 10.199 13.441 10.151 12.299 10.215 C 8.859 10.387 6.646 12.124 6.795 14.537 C 6.87 15.76 7.575 16.814 8.779 17.501 C 9.796 18.083 11.107 18.367 12.47 18.303 C 14.27 18.218 15.682 17.623 16.667 16.537 C 17.414 15.712 17.887 14.643 18.096 13.296 C 18.954 13.744 19.589 14.333 19.94 15.041 C 20.537 16.246 20.571 18.225 18.706 19.838 C 17.071 21.252 15.106 21.863 12.136 21.882 C 8.841 21.862 6.349 20.947 4.729 19.165 C 3.211 17.495 2.428 15.085 2.399 12 C 2.428 8.915 3.211 6.504 4.729 4.835 C 6.349 3.053 8.84 2.139 12.136 2.118 C 15.453 2.138 17.989 3.058 19.671 4.848 C 20.496 5.727 21.118 6.831 21.528 8.118 L 23.86 7.58 C 23.363 5.995 22.581 4.63 21.518 3.497 C 19.361 1.2 16.207 0.024 12.144 0 L 12.128 0 C 8.072 0.024 4.954 1.205 2.859 3.51 C 0.994 5.56 0.032 8.414 0 11.992 L 0 12.008 C 0.032 15.586 0.994 18.439 2.859 20.49 C 4.954 22.795 8.072 23.976 12.126 24 L 12.144 24 C 15.749 23.978 18.29 23.162 20.383 21.351 C 23.123 18.983 23.041 16.015 22.137 14.193 C 21.49 12.886 20.255 11.825 18.566 11.123 Z M 12.341 16.188 C 10.833 16.262 9.268 15.676 9.189 14.422 C 9.131 13.492 9.954 12.453 12.434 12.33 C 12.718 12.315 12.997 12.309 13.27 12.309 C 14.172 12.309 15.013 12.384 15.779 12.529 C 15.494 15.617 13.818 16.119 12.341 16.189 Z" fill="currentColor" />
    </svg>
  );
}

export function XIcon({ strokeWidth = 1, fillOpacity = 0, ...props }: IconProps) {
  void strokeWidth;
  void fillOpacity;
  return (
    <svg viewBox="0 0 24.087 24" aria-hidden="true" {...props}>
      <path d="M 18.97 0 L 22.663 0 L 14.594 10.167 L 24.087 24 L 16.654 24 L 10.833 15.609 L 4.171 24 L 0.476 24 L 9.107 13.125 L 0 0.001 L 7.622 0.001 L 12.884 7.67 Z M 17.674 21.564 L 19.72 21.564 L 6.51 2.309 L 4.314 2.309 Z" fill="currentColor" />
    </svg>
  );
}

export function HeartIcon({ strokeWidth = 1.5, fillOpacity = 0, ...props }: IconProps) {
  void fillOpacity;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 20.5s-7.5-4.6-7.5-10A4.1 4.1 0 0 1 12 8.2a4.1 4.1 0 0 1 7.5 2.3c0 5.4-7.5 10-7.5 10Z" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
