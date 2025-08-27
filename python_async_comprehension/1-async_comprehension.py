#!/usr/bin/env python3
"""this module defines a function"""
import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """function"""
    numbers = [number async for number in async_generator()]
    return numbers
