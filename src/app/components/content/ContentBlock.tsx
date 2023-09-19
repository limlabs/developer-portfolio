import { FC, Fragment } from "react";

import { Block, BlockProps } from "../ui/Block";
import { PayloadLink, PayloadLinkType } from "./Link";
import { RichText } from "./richText";

interface ContentBlockFields extends BlockProps {
  richText?: unknown;
  enableLink?: boolean;
  link?: PayloadLinkType;
}

interface ContentBlockProps {
  contentFields: ContentBlockFields[];
}

export const ContentBlock: FC<ContentBlockProps> = ({ contentFields }) => {
  return (
    <Fragment>
      {contentFields.map(({ richText, size, id, enableLink, link }) => {
        let content = <RichText content={richText} />;

        if (enableLink) {
          content = <PayloadLink link={link}>{content}</PayloadLink>;
        }

        return (
          <Block size={size} key={id} asChild={enableLink}>
            {content}
          </Block>
        );
      })}
    </Fragment>
  );
};
