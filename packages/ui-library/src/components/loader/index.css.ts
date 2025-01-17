import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  :host {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  ${ComponentThemeIterator((theme, cmp, css) => {
    const { Loader } = cmp;

    return css`
      .loader-container.${theme} {
        &.sm {
          padding: ${Loader.Container.Padding.SM};
        }

        &.md {
          padding: ${Loader.Container.Padding.MD};
        }

        &.lg {
          padding: ${Loader.Container.Padding.LG};
        }
      }

      .blr-loader.${theme} {
        border-radius: 50%;
        border-style: solid;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;

        &.default {
          border-color: ${Loader.Background.BorderColor.Default};
          border-bottom-color: ${Loader.Foreground.BorderColor.Default};
        }

        &.inverted {
          border-color: ${Loader.Background.BorderColor.Inverted};
          border-bottom-color: ${Loader.Foreground.BorderColor.Inverted};
        }

        &.sm {
          width: calc(${Loader.Container.Size.SM} - (${Loader.Container.Padding.SM} * 2));
          height: calc(${Loader.Container.Size.SM} - (${Loader.Container.Padding.SM} * 2));
          border-width: ${Loader.Background.BorderWidth.SM};
        }

        &.md {
          width: calc(${Loader.Container.Size.MD} - (${Loader.Container.Padding.MD} * 2));
          height: calc(${Loader.Container.Size.MD} - (${Loader.Container.Padding.MD} * 2));
          border-width: ${Loader.Background.BorderWidth.MD};
        }

        &.lg {
          width: calc(${Loader.Container.Size.LG} - (${Loader.Container.Padding.LG} * 2));
          height: calc(${Loader.Container.Size.LG} - (${Loader.Container.Padding.LG} * 2));
          border-width: ${Loader.Background.BorderWidth.LG};
        }
      }
    `;
  })}
`;
