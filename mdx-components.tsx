import type { MDXComponents } from 'mdx/types'
import CodeBlock from "./components/CodeBlock"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    abbr: ({ children }) => <abbr>{children}</abbr>,
    pre: (props) => {
      if (!props.children.props.className) {
        // don't load codeblock for "anonymous" blocks
        return <pre>{props.children.props.children}</pre>;
      }

      return (
        <CodeBlock
          {...props}
          fallback={<pre>{props.children.props.children}</pre>}
        />
      );
    },
    a: (props) => <a {...props} target="_blank" rel="noopen noreferer" />,
    ...components,
  }
}

