[View code on GitHub](https://github.com/wandb/weave/weave/logs.py)

This file contains code related to logging for the Weave project. The purpose of this code is to provide a flexible and configurable logging system that can be used throughout the project. 

The `LogFormat` enum defines two possible formats for log messages: "pretty" and "datadog". The former is a human-readable format, while the latter is a JSON format that is compatible with the Datadog logging service. 

The `LogSettings` dataclass is used to store the desired log format and log level for a particular logger. 

The `indent_logs`, `increment_indent`, `reset_indent`, and `get_indent` functions are used to keep track of the indentation level for log messages. This is useful for nested log messages, where it can be helpful to visually distinguish between messages at different levels of nesting. 

The `IndentFilter` class is a logging filter that adds an `indent` attribute to log records. This attribute contains a string of spaces that corresponds to the current indentation level. 

The `get_logdir`, `get_logfile_path`, and `default_log_filename` functions are used to determine the path to the log file(s) that will be used for logging. If the log directory or file cannot be created or written to, a warning message is printed and logging to the file is disabled. 

The `env_log_level` function reads the `WEAVE_LOG_LEVEL` environment variable to determine the desired log level. If this variable is not set, the default log level is "ERROR". If the `WEAVE_SERVER_ENABLE_LOGGING` environment variable is set, the default log level is "INFO". 

The `silence_mpl` function disables logging for the Matplotlib library. 

The `set_global_log_level` function is unused. 

The `print_handlers` and `print_all_handlers` functions are used for debugging and print information about the logging handlers that are currently in use. 

The `WeaveJSONEncoder` class is a JSON encoder that is used to encode log messages in the Datadog format. 

The `setup_handler` function is used to configure a logging handler with the desired log format and level. 

The `enable_stream_logging` function is the main entry point for configuring logging. It takes several optional arguments that specify the desired log settings for different loggers. If a logger is not specified, the root logger is used. If a log setting is not specified, the default log settings are used. 

The `configure_logger` function is called to configure logging when the module is imported. It sets the log level for the root logger, removes any existing stream handlers, and then calls `enable_stream_logging` to add the desired logging handlers. 

Overall, this code provides a flexible and configurable logging system that can be used throughout the Weave project. It supports both human-readable and JSON log formats, and can log to both files and standard output. The indentation support and ability to configure different log settings for different loggers makes it easy to use and customize.
## Questions: 
 1. What is the purpose of the `weave.environment` module that is imported at the end of the code?
- It is not clear from the code what the purpose of the `weave.environment` module is, as it is not used anywhere in this file. A smart developer might wonder if it is used in other parts of the project, or if it is a legacy import that can be removed.

2. What is the purpose of the `enable_stream_logging` function, and how is it used?
- The `enable_stream_logging` function appears to be responsible for configuring the logging settings for the project, including setting up log handlers and formatters. A smart developer might wonder how this function is called and what arguments are typically passed to it.

3. What is the purpose of the `WeaveJSONEncoder` class, and why is it used in the `enable_stream_logging` function?
- The `WeaveJSONEncoder` class appears to be a custom JSON encoder that is used to format log messages in a specific way for the Datadog logging format. A smart developer might wonder why this custom encoder is needed, and whether it is used in other parts of the project or only in the `enable_stream_logging` function.