[View code on GitHub](https://github.com/wandb/weave/weave/timestamp.py)

This code provides helper functions for working with timestamps in the Weave project. The code defines rules for timestamps in Weave, including that all timestamps are assumed to be in milliseconds unless otherwise specified, and that all operations on datetime objects should be tz aware and in UTC. 

The `tz_aware_dt` function takes a datetime object and returns a tz aware datetime object in UTC. If the input datetime object is not tz aware, it is assumed to be in the system timezone and converted to UTC. 

The `unitless_int_to_inferred_ms` function takes an integer or float and attempts to infer the unit of the timestamp. In Weave0, the function used boundaries to determine whether the timestamp was in seconds, milliseconds, microseconds, or nanoseconds. However, this approach had problems with negative values and introduced a bug with the seconds range. In Weave1, the SDK is fixed to always send timestamps in milliseconds, so the function assumes that the input value is in milliseconds. If the value is not in milliseconds, the data writing code should be corrected or the user should do a multiply or divide. 

The `python_datetime_to_ms` function takes a datetime object and returns the timestamp in milliseconds as an integer. 

The `ms_to_python_datetime` function takes a timestamp in milliseconds as a float and returns a datetime object in UTC. 

These functions are useful for serialization and deserialization of timestamps in Weave, and ensure that all timestamps are in UTC and in the correct resolution. 

Example usage:

```
import datetime
from weave import python_datetime_to_ms, ms_to_python_datetime

dt = datetime.datetime.utcnow()
ms = python_datetime_to_ms(dt)
print(ms)  # prints the timestamp in milliseconds as an integer

dt2 = ms_to_python_datetime(ms)
print(dt2)  # prints the datetime object in UTC
```
## Questions: 
 1. What is the purpose of the `tz_aware_dt` function?
- The `tz_aware_dt` function ensures that all datetime objects used in the code are timezone aware and in UTC. If a non-timezone aware datetime object is provided, it assumes the intention is to use the system timezone and converts it to UTC.

2. What is the purpose of the `unitless_int_to_inferred_ms` function?
- The `unitless_int_to_inferred_ms` function attempts to infer the unit of a timestamp integer value. It assumes that the value is in milliseconds, but if it falls outside of the range of the built-in datetime library, it may be in nanoseconds or microseconds. However, in Weave1, it is recommended to always use milliseconds or have the unit specified explicitly.

3. What is the purpose of the `ms_to_python_datetime` function?
- The `ms_to_python_datetime` function converts a timestamp in milliseconds to a datetime object in UTC timezone. It uses the `datetime.datetime.fromtimestamp` method and the `floor` function to ensure the correct resolution.