# Custom Footer

Renders a custom footer with configurable links.

## Configuration

| Option    | Type                     | Default                         | Description                                                                                    |
| --------- | ------------------------ | ------------------------------- | ---------------------------------------------------------------------------------------------- |
| `links`   | `Record<string, string>` | Quartz GitHub and Discord links | A map of link labels to their URLs to display in the footer. Set `links: {}` for none.         |
| `message` | `string`                 | not set                         | Extra text shown below the "Created with Quartz" line, e.g. a license notice. HTML is allowed. |

## Layout

The footer component uses `position: footer` by default. You can override this in your `quartz.config.yaml`:

```yaml title="quartz.config.yaml"
plugins:
  - source: "./custom-plugins/footer"
    enabled: true
    layout:
      position: footer
      priority: 50
```

To disable the footer, set `enabled: false`.

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/plugins/Footer) for more information.

## License

MIT
