#!/usr/bin/env python3
"""this module defines a function"""
import random
import asyncio
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """function"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)