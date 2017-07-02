import boxen from 'boxen'
import chalk from 'chalk'
import ip from 'ip'

export default function (opt = {}) {
  let message = chalk.green(`Running ${(opt.chalk || chalk.bold)(opt.type)} in ${chalk.bold(process.env.NODE_ENV)} mode\n\n`)

  const localURL = `http://${opt.host}:${opt.port}`
  message += `- ${chalk.bold('Local:           ')} ${localURL}`

  try {
    const url = `http://${ip.address()}:${opt.port}`
    message += `\n- ${chalk.bold('On Your Network: ')} ${url}`
  } catch (err) { /* ignore errors */ }

  console.log(
    boxen(message, {
      padding: 1,
      borderColor: 'green',
      margin: 1,
    }),
  )
}
