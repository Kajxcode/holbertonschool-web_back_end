#!/usr/bin/env python3
"""this module defines a function"""
import asyncio
import time
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """function"""
    start = time.time()

    await asyncio.gather(*[async_comprehension() for _ in range(4)])

    end = time.time()
    total_time = end - start
    return total_time
