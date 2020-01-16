import * as React from 'react';
import Logo from './logo';
import {Block} from 'baseui/block';
import {useStyletron} from 'baseui';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import Editor from '../yard/editor';

const code = `import * as React from "react";
import {
  Card,
  StyledBody,
  StyledAction
} from "baseui/card";
import { Button } from "baseui/button";

export default () => {
  return (
    <Card>
      <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non
        mi. Nulla ornare faucibus ex, non facilisis nisl.
        Proin ut dui sed metus pharetra hend rerit vel non
        mi. Nulla ornare faucibus ex, non facilisis nisl.
      </StyledBody>
      <StyledAction>
        <Button
          overrides={{
            BaseButton: { style: { width: "100%" } }
          }}
        >
          Button Label
        </Button>
      </StyledAction>
    </Card>
  );
}`;

const Studio = () => {
  const [css, theme] = useStyletron();
  return (
    <React.Fragment>
      <Block
        display="grid"
        gridTemplateColumns="2fr 2.5fr 1.2fr"
        gridTemplateRows="69px 1fr"
        height="100vh"
      >
        <div
          className={css({
            ...theme.typography.font400,
            padding: theme.sizing.scale600,
            gridColumn: '1 / span 3',
            gridRow: '1',
            alignItems: 'center',
            display: 'flex',
            borderBottom: `1px solid ${theme.borders.border400.borderColor}`,
          })}
        >
          <Logo />
          <Block font="HeadingSmall" marginLeft="scale300">
            Base Studio
          </Block>
        </div>
        <div
          className={css({
            ...theme.typography.font400,
            boxSizing: 'border-box',

            padding: theme.sizing.scale600,
            gridColumn: '1',
            gridRow: '2',
          })}
        >
          <Editor code={code} onChange={() => null} />
        </div>
        <div
          className={css({
            ...theme.typography.font400,
            boxSizing: 'border-box',
            padding: theme.sizing.scale600,
            borderLeft: `1px solid ${theme.borders.border400.borderColor}`,
            gridColumn: '2',
            gridRow: '2',
          })}
        >
          <Card>
            <StyledBody>
              Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
              ornare faucibus ex, non facilisis nisl. Proin ut dui sed metus
              pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non
              facilisis nisl.
            </StyledBody>
            <StyledAction>
              <Button
                overrides={{
                  BaseButton: {style: {width: '100%'}},
                }}
              >
                Button Label
              </Button>
            </StyledAction>
          </Card>
        </div>
        <div
          className={css({
            ...theme.typography.font400,
            boxSizing: 'border-box',
            padding: theme.sizing.scale600,
            borderLeft: `1px solid ${theme.borders.border400.borderColor}`,
            gridColumn: '3',
            gridRow: '2',
          })}
        >
          Sidebar
        </div>
      </Block>
    </React.Fragment>
  );
};

export default Studio;
