#!/usr/bin/env python3
"""this module defines a function"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """"function"""
    delays = []

    for task in asyncio.as_completed(
        [wait_random(max_delay) for _ in range(n)]
    ):
        delay = await task
        delays.append(delay)
    return delays
